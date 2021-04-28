# Kataw parser test case

## Input

`````js
declare class X {
  a: number;
  static b: number;
  c: number;
}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": {
                "kind": 82165,
                "flags": 768,
                "start": 0,
                "end": 7
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 7,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 768,
                "start": 13,
                "end": 15
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 17,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 768,
                                "start": 22,
                                "end": 29
                            },
                            "flags": 0,
                            "start": 21,
                            "end": 29
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 17,
                        "end": 29
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 29,
                        "end": 30
                    },
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 768,
                            "start": 30,
                            "end": 39
                        },
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 39,
                            "end": 41
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 768,
                                "start": 42,
                                "end": 49
                            },
                            "flags": 0,
                            "start": 41,
                            "end": 49
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 39,
                        "end": 49
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 49,
                        "end": 50
                    },
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 50,
                            "end": 54
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 768,
                                "start": 55,
                                "end": 62
                            },
                            "flags": 0,
                            "start": 54,
                            "end": 62
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 50,
                        "end": 62
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 62,
                        "end": 63
                    }
                ],
                "flags": 256,
                "start": 17,
                "end": 65
            },
            "flags": 128,
            "start": 7,
            "end": 65
        }
    ],
    "isModule": false,
    "text": "declare class X {\n  a: number;\n  static b: number;\n  c: number;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

