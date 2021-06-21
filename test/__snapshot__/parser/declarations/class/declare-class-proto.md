# Kataw parser test case

## Input

`````js
declare class A {
  proto: T;
}

declare class B {
  proto x: T;
}
`````

## Options

### Parser Options

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
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 13,
                "end": 15
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "proto",
                                "rawText": "proto",
                                "flags": 96,
                                "start": 17,
                                "end": 25
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 26,
                                    "end": 28
                                },
                                "flags": 2097152,
                                "start": 26,
                                "end": 28
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 29
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 15,
                    "end": 31
                },
                "flags": 4128,
                "start": 15,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        },
        {
            "kind": 178,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 31,
                "end": 40
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 31,
                "end": 46
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "start": 46,
                "end": 48
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": {
                                "kind": 16873,
                                "flags": 32,
                                "start": 50,
                                "end": 58
                            },
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 58,
                                "end": 60
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 61,
                                        "end": 63
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 61,
                                    "end": 63
                                },
                                "flags": 2097152,
                                "start": 61,
                                "end": 63
                            },
                            "flags": 2097152,
                            "start": 50,
                            "end": 64
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 48,
                    "end": 66
                },
                "flags": 4128,
                "start": 48,
                "end": 66
            },
            "flags": 16,
            "start": 31,
            "end": 66
        }
    ],
    "isModule": false,
    "source": "declare class A {\n  proto: T;\n}\n\ndeclare class B {\n  proto x: T;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript

declare class A TODO!
declare class B TODO!
```

### Diagnostics

```javascript
✔ No errors
```

