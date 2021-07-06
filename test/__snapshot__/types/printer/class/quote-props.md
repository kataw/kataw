# Kataw parser test case

## Input

`````js
class A {
  a = "a"
};

class B {
  'b' = "b"
};

class C {
  c1 = "c1"
  'c2' = "c2"
};

class D {
  d1 = "d1"
  'd-2' = "d2"
};
`````

## Options

`````js
{ allowTypes : true }
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
                "text": "A",
                "rawText": "A",
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
                                "start": 9,
                                "end": 13
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392131,
                                "text": "a",
                                "rawText": "\"a\"",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 19
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 19
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 21,
            "end": 22
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 22,
                "end": 29
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "transformFlags": 0,
                "start": 29,
                "end": 31
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "'b'",
                                "flags": 4194401,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 39
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "\"b\"",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 45
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 33,
                            "end": 45
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 45
                },
                "flags": 31,
                "transformFlags": 0,
                "start": 32,
                "end": 47
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 22,
            "end": 47
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 47,
            "end": 48
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 48,
                "end": 55
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 55,
                "end": 57
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "c1",
                                "rawText": "c1",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 64
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392131,
                                "text": "c1",
                                "rawText": "\"c1\"",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 71
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 59,
                            "end": 71
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 201392131,
                                "text": "c2",
                                "rawText": "'c2'",
                                "flags": 4194401,
                                "transformFlags": 0,
                                "start": 71,
                                "end": 78
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392131,
                                "text": "c2",
                                "rawText": "\"c2\"",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 85
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 71,
                            "end": 85
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 59,
                    "end": 85
                },
                "flags": 57,
                "transformFlags": 0,
                "start": 32,
                "end": 87
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 48,
            "end": 87
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 87,
            "end": 88
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 88,
                "end": 95
            },
            "name": {
                "kind": 134299649,
                "text": "D",
                "rawText": "D",
                "flags": 96,
                "transformFlags": 0,
                "start": 95,
                "end": 97
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "d1",
                                "rawText": "d1",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 99,
                                "end": 104
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392131,
                                "text": "d1",
                                "rawText": "\"d1\"",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 106,
                                "end": 111
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 99,
                            "end": 111
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 201392131,
                                "text": "d-2",
                                "rawText": "'d-2'",
                                "flags": 4194401,
                                "transformFlags": 0,
                                "start": 111,
                                "end": 119
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392131,
                                "text": "d2",
                                "rawText": "\"d2\"",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 121,
                                "end": 126
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 111,
                            "end": 126
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 99,
                    "end": 126
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 32,
                "end": 128
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 88,
            "end": 128
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 128,
            "end": 129
        }
    ],
    "isModule": false,
    "source": "class A {\n  a = \"a\"\n};\n\nclass B {\n  'b' = \"b\"\n};\n\nclass C {\n  c1 = \"c1\"\n  'c2' = \"c2\"\n};\n\nclass D {\n  d1 = \"d1\"\n  'd-2' = \"d2\"\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 129
}
```

### Printed

```javascript

class A {
  a = "\"a\"";
}
class B {
  '\'b\'' = "\"b\"";
}

class C {
  c1 = "\"c1\"";
  '\'c2\'' = "\"c2\"";
}

class D {
  d1 = "\"d1\"";
  '\'d-2\'' = "\"d2\"";
}

```

### Diagnostics

```javascript
✔ No errors
```

