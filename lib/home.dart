import 'dart:io';
import 'package:flutter/material.dart';
import 'package:tflite/tflite.dart';
import 'package:image_picker/image_picker.dart';
import 'package:url_launcher/url_launcher.dart';

final Uri _url = Uri.parse('https://team-project.dt653058.repl.co/');

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  bool _loading = true;
  late File _image;
  late List _output;
  final picker = ImagePicker();

  @override
  void initState() {
    super.initState();
    loadModel().then((value) {
      setState(() {});
    });
  }

  @override
  void dispose() {
    super.dispose();
    Tflite.close();
  }

  classifyImage(File image) async {
    var output = await Tflite.runModelOnImage(
      path: image.path,
      numResults: 36,
      threshold: 0.5,
      imageMean: 127.5,
      imageStd: 127.5,
    );
    setState(() {
      _output = output!;
      _loading = false;
    });
  }

  loadModel() async {
    await Tflite.loadModel(
        model: 'assets/model.tflite', labels: 'assets/labels.txt');
  }

  pickImage() async {
    var image = await picker.pickImage(source: ImageSource.camera);
    if (image == null) return null;

    setState(() {
      _image = File(image.path);
    });
    classifyImage(_image);
  }

  pickGalleryImage() async {
    var image = await picker.pickImage(source: ImageSource.gallery);
    if (image == null) return null;

    setState(() {
      _image = File(image.path);
    });
    classifyImage(_image);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.blueGrey[600],
          title: const Text(
            'Macrollector',
            style: TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.w200,
                fontSize: 20,
                letterSpacing: 0.8),
          ),
        ),
        body: Container(
          color: Colors.black.withOpacity(0.9),
          padding: EdgeInsets.symmetric(horizontal: 35, vertical: 50),
          child: Container(
            alignment: Alignment.center,
            padding: EdgeInsets.all(30),
            decoration: BoxDecoration(
              color: Color(0xFF2A363B),
              borderRadius: BorderRadius.circular(30),
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  child: Center(
                    child: _loading == true
                        ? null
                        : Container(
                            child: Column(
                              children: [
                                Container(
                                  height: 250,
                                  width: 250,
                                  child: ClipRRect(
                                    borderRadius: BorderRadius.circular(30),
                                    child: Image.file(
                                      _image,
                                      fit: BoxFit.fill,
                                    ),
                                  ),
                                ),
                                Divider(
                                  height: 25,
                                  thickness: 1,
                                ),
                                _output != null
                                    ? Text(
                                        'The object is: ${_output[0]['label']}!',
                                        style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 18,
                                            fontWeight: FontWeight.w500),
                                      )
                                    : Container(),
                                Divider(
                                  height: 25,
                                  thickness: 1,
                                ),
                              ],
                            ),
                          ),
                  ),
                ),
                Container(
                  child: Column(
                    children: [
                      GestureDetector(
                        onTap: pickImage,
                        child: Container(
                          width: MediaQuery.of(context).size.width - 200,
                          alignment: Alignment.center,
                          padding: EdgeInsets.symmetric(
                              horizontal: 24, vertical: 17),
                          decoration: BoxDecoration(
                              color: Colors.blueGrey[600],
                              borderRadius: BorderRadius.circular(15)),
                          child: Text(
                            'Take A Photo',
                            style: TextStyle(color: Colors.white, fontSize: 16),
                          ),
                        ),
                      ),
                      SizedBox(
                        height: 30,
                      ),
                      GestureDetector(
                        onTap: pickGalleryImage,
                        child: Container(
                          width: MediaQuery.of(context).size.width - 200,
                          alignment: Alignment.center,
                          padding: EdgeInsets.symmetric(
                              horizontal: 24, vertical: 17),
                          decoration: BoxDecoration(
                              color: Colors.blueGrey[600],
                              borderRadius: BorderRadius.circular(15)),
                          child: Text(
                            'Pick From Gallery',
                            style: TextStyle(color: Colors.white, fontSize: 16),
                          ),
                        ),
                      ),
                      ElevatedButton(
                        child: const Text('Open URL'),
                        onPressed: _launchUrl,
                      )
                    ],
                  ),
                ),
              ],
            ),
          ),
        ));
  }

  void _launchUrl() async {
    if (!await launchUrl(_url)) throw 'Could not launch $_url';
  }
}
