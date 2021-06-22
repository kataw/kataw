# Kataw parser test case

## Input

`````js
declare class B {
  static set "string" (...a): {};
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
                            "staticToken": null,
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
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 41,
                                                "end": 44
                                            },
                                            "name": null,
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 44,
                                                    "end": 45
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 41,
                                                "end": 45
                                            },
                                            "flags": 2097152,
                                            "start": 41,
                                            "end": 45
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 41,
                                    "end": 45
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
                                        "start": 47,
                                        "end": 50
                                    },
                                    "flags": 2097152,
                                    "start": 47,
                                    "end": 50
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 39,
                                "end": 50
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 51
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 15,
                    "end": 53
                },
                "flags": 4128,
                "start": 15,
                "end": 53
            },
            "flags": 16,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "declare class B {\n  static set \"string\" (...a): {};\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'set' accessor cannot have rest parameter. - start: 41, end: 44

```

