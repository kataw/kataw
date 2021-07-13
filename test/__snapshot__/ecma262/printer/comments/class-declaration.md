# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, allowTypes: true }
`````

## Input

`````js
class x {
    ;
    ;/*1*/
    ;
    ;
    a = b
    x /*2*/: /*3*/ string
}


class /*1*/ y /*2*/ {
    ;
    ;/*3*/
    ;
    ;
    a /*4*/= /*5*/b
    x/*6*/: /*7*/string
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
                "text": "x",
                "rawText": "x",
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
                            "kind": 1108353041,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 15
                        },
                        {
                            "kind": 1108353041,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 21
                        },
                        {
                            "kind": 1108353041,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 32
                        },
                        {
                            "kind": 1108353041,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 38
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 44
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 48
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 38,
                            "end": 48
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 54
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 61,
                                    "end": 74
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 74
                            },
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 48,
                            "end": 74
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 74
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 76
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 76
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 76,
                "end": 84
            },
            "name": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 84,
                "end": 92
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 1108353041,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 100,
                            "end": 106
                        },
                        {
                            "kind": 1108353041,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 106,
                            "end": 112
                        },
                        {
                            "kind": 1108353041,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 112,
                            "end": 123
                        },
                        {
                            "kind": 1108353041,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 123,
                            "end": 129
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 129,
                                "end": 135
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 142,
                                "end": 149
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 129,
                            "end": 149
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 149,
                                "end": 155
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 161,
                                    "end": 173
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 161,
                                "end": 173
                            },
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 149,
                            "end": 173
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 100,
                    "end": 173
                },
                "flags": 92,
                "transformFlags": 0,
                "start": 32,
                "end": 175
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 76,
            "end": 175
        }
    ],
    "isModule": false,
    "source": "class x {\n    ;\n    ;/*1*/\n    ;\n    ;\n    a = b\n    x /*2*/: /*3*/ string\n}\n\n\nclass /*1*/ y /*2*/ {\n    ;\n    ;/*3*/\n    ;\n    ;\n    a /*4*/= /*5*/b\n    x/*6*/: /*7*/string\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 176
}
```

### Printed

```javascript
class x {
  ;
  ; /*1*/
  ;
  ;
  a = b;
  x /*2*/:/*3*/  string;
}
class /*1*/ y /*2*/ {
  ;
  ; /*3*/
  ;
  ;
  a /*4*/ =/*5*/  b;
  x /*6*/:/*7*/  string;
}

```

### Diagnostics

```javascript
✔ No errors
```

