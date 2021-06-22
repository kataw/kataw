# Kataw parser test case

## Input

`````js
declare class A { "static" foo(): number }
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
                                "kind": 201392131,
                                "text": "static",
                                "rawText": "\"static\"",
                                "flags": 96,
                                "start": 17,
                                "end": 26
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
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 30
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 26,
                                    "end": 30
                                },
                                "flags": 2097152,
                                "start": 26,
                                "end": 30
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 30
                        },
                        {
                            "kind": 196,
                            "protoKeyword": null,
                            "staticToken": null,
                            "typeParameter": null,
                            "value": {
                                "kind": 282,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 31,
                                "end": 31
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 33,
                                    "end": 40
                                },
                                "flags": 2097152,
                                "start": 33,
                                "end": 40
                            },
                            "flags": 2097152,
                            "start": 30,
                            "end": 40
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 15,
                    "end": 42
                },
                "flags": 4128,
                "start": 15,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "declare class A { \"static\" foo(): number }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 30, end: 31

```

