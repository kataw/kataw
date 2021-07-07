# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static {
    let test262 = 'first block';
  }
  static {
    probe = test262;
   }
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 18
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 28
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "test262",
                                                            "rawText": "test262",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 28,
                                                            "end": 36
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392131,
                                                            "text": "first block",
                                                            "rawText": "'first block'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 38,
                                                            "end": 52
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4224,
                                                        "start": 28,
                                                        "end": 52
                                                    }
                                                ],
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 52
                                            },
                                            "flags": 33554448,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 53
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 53
                                },
                                "flags": 9,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 57
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 57
                        },
                        {
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 66
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "probe",
                                                    "rawText": "probe",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 68,
                                                    "end": 78
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 78,
                                                    "end": 80
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "test262",
                                                    "rawText": "test262",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 80,
                                                    "end": 88
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 68,
                                                "end": 88
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 68,
                                            "end": 89
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 89
                                },
                                "flags": 57,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 94
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 57,
                            "end": 94
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 94
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 96
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    let test262 = 'first block';\n  }\n  static {\n    probe = test262;\n   }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript
class C {
  
  
}
```

### Diagnostics

```javascript
✔ No errors
```

