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
                "text": "X",
                "rawText": "X",
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
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "start": 17,
                                "end": 21
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 22,
                                    "end": 29
                                },
                                "flags": 2097152,
                                "start": 22,
                                "end": 29
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 30
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 32,
                                "start": 30,
                                "end": 39
                            },
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 39,
                                "end": 41
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 42,
                                    "end": 49
                                },
                                "flags": 2097152,
                                "start": 42,
                                "end": 49
                            },
                            "flags": 2097152,
                            "start": 30,
                            "end": 50
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 97,
                                "start": 50,
                                "end": 54
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 55,
                                    "end": 62
                                },
                                "flags": 2097152,
                                "start": 55,
                                "end": 62
                            },
                            "flags": 2097152,
                            "start": 50,
                            "end": 63
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 15,
                    "end": 65
                },
                "flags": 4128,
                "start": 15,
                "end": 65
            },
            "flags": 16,
            "start": 0,
            "end": 65
        }
    ],
    "isModule": false,
    "source": "declare class X {\n  a: number;\n  static b: number;\n  c: number;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript

declare class X { a: number , static b: number , c: number  }
```

### Diagnostics

```javascript
✔ No errors
```

