import 'package:flutter/material.dart';
import 'package:camera/camera.dart';
import 'package:path_provider/path_provider.dart';
import 'package:google_ml_kit/google_ml_kit.dart';
import 'home_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fruit Recognition',
      home: Home(),
      debugShowCheckedModeBanner: false,
    );
  }
}
/*
void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: HomePage(),
    );
  }
}
 */
/*
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  late CameraController _cameraController;
  late bool _loading = false;
  late bool _itsHotDog;

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    var display1;
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        onPressed: () => _elaborateImage(context),
        child: const Icon(Icons.camera),
      ),
      backgroundColor: Colors.black,
      body: Column(
        children: <Widget>[
          AnimatedContainer(
            width: double.infinity,
            height: 100.0,
            color: _itsHotDog == null
                ? Colors.black
                : _itsHotDog == true
                    ? Colors.green
                    : Colors.red,
            child: Padding(
              padding: const EdgeInsets.only(top: 28.0),
              child: Center(
                child: Text(
                  _itsHotDog == null
                      ? ""
                      : _itsHotDog == true
                          ? "HOT DOG!"
                          : "NOT HOT DOG!",
                  style: Theme.of(context).textTheme.display1,
                ),
              ),
            ),
            duration: const Duration(milliseconds: 400),
          ),
          Center(
            child: _itsReady()
                ? AspectRatio(
                    aspectRatio: _cameraController.value.aspectRatio,
                    child: _loading
                        ? const Center(child: CircularProgressIndicator())
                        : CameraPreview(_cameraController),
                  )
                : const SizedBox(),
          ),
        ],
      ),
    );
  }

  Future _elaborateImage(BuildContext context) async {
    final path =
    (await getTemporaryDirectory()).path + DateTime.now().toString();
    await _cameraController.takePicture(path);
    final FirebaseVisionImage visionImage =
        FirebaseVisionImage.fromFilePath(path);
    final LabelDetector labelDetector = FirebaseVision.instance.labelDetector();
    List<label> labels = await labelDetector.detectInImage(visionImage);

    // print labels for debugging purpose
    labels.forEach((1) => print(l.label));

    setState(() {
      // search for "Hot dog label"
    _itsHotDog = labels.where((label) => label.label == 'Hot dog').isNotEmpty;
    _loading = false;
    });
  }

  @override
  void initState() {
    super.initState();

    availableCameras().then((cameras) async {
      _cameraController = CameraController(
        cameras[0],
        ResolutionPreset.medium,
      );
      await _cameraController.initialize();
      setState(() {});
    }).catchError((error) {
      print("Error $error");
    });
  }

  @override
  void dispose() {
    _cameraController?.dispose();
    super.dispose();
  }
}

class _itsReady {}

class _elaborateImage {
  _elaborateImage(BuildContext context);
}
*/
