# Kataw parser test case

## Input

`````js
declare class B {
  static set "string" (x): {};
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
                "text": "B",
                "rawText": "B",
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
                            "setKeyword": {
                                "kind": 16499,
                                "flags": 96,
                                "start": 17,
                                "end": 30
                            },
                            "key": {
                                "kind": 201392131,
                                "text": "string",
                                "rawText": "\"string\"",
                                "flags": 96,
                                "start": 30,
                                "end": 39
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": null,
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 41,
                                                    "end": 42
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 41,
                                                "end": 42
                                            },
                                            "flags": 2097152,
                                            "start": 41,
                                            "end": 42
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 41,
                                    "end": 42
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234353,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 44,
                                        "end": 47
                                    },
                                    "flags": 2097152,
                                    "start": 44,
                                    "end": 47
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 39,
                                "end": 47
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 48
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 15,
                    "end": 50
                },
                "flags": 4128,
                "start": 15,
                "end": 50
            },
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "declare class B {\n  static set \"string\" (x): {};\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

declare class B { "\"string\""(x): {} }
```

### Diagnostics

```javascript
✔ No errors
```

