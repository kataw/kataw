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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 263,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": null,
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
                                                            "start": 28,
                                                            "end": 36
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392131,
                                                            "text": "first block",
                                                            "rawText": "'first block'",
                                                            "flags": 4194400,
                                                            "start": 38,
                                                            "end": 52
                                                        },
                                                        "flags": 16,
                                                        "start": 28,
                                                        "end": 52
                                                    }
                                                ],
                                                "flags": 33554448,
                                                "start": 28,
                                                "end": 52
                                            },
                                            "flags": 33554448,
                                            "start": 20,
                                            "end": 53
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 20,
                                    "end": 53
                                },
                                "flags": 16,
                                "start": 18,
                                "end": 57
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 57
                        },
                        {
                            "kind": 263,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": null,
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
                                                    "flags": 96,
                                                    "start": 68,
                                                    "end": 78
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 64,
                                                    "start": 78,
                                                    "end": 80
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "test262",
                                                    "rawText": "test262",
                                                    "flags": 96,
                                                    "start": 80,
                                                    "end": 88
                                                },
                                                "flags": 32,
                                                "start": 68,
                                                "end": 88
                                            },
                                            "flags": 16,
                                            "start": 68,
                                            "end": 89
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 68,
                                    "end": 89
                                },
                                "flags": 16,
                                "start": 66,
                                "end": 94
                            },
                            "flags": 32,
                            "start": 57,
                            "end": 94
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 94
                },
                "flags": 32,
                "start": 7,
                "end": 96
            },
            "flags": 16,
            "start": 0,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    let test262 = 'first block';\n  }\n  static {\n    probe = test262;\n   }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript

class C {
  import ;
  import ;
}
```

### Diagnostics

```javascript
✔ No errors
```

