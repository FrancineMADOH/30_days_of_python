import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:relaxsquad/screens/shared/loading.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  final Future<FirebaseApp> _initialization = Firebase.initializeApp();
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: FutureBuilder(
        future: _initialization,
        builder: (context, snapshot) {
          //error??
          if (snapshot.hasError) {
            print('something went wrong');
          }

          //load the app if no error
          if (snapshot.connectionState == ConnectionState.done) {
            print('Firebase connection succed!');
          }

          //wait for the initialization
          return LoadingScreen();
        },
      ),
    );
  }
}
