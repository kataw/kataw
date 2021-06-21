# Kataw parser test case

## Input

`````js
declare class B {
  static +
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
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 32,
                                "start": 17,
                                "end": 26
                            },
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "start": 26,
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
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 26,
                                        "end": 26
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 26,
                                    "end": 26
                                },
                                "flags": 2097152,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 15,
                    "end": 26
                },
                "flags": 4128,
                "start": 15,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 26,
                    "end": 28
                },
                "operand": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 28,
                    "end": 28
                },
                "flags": 32,
                "start": 26,
                "end": 28
            },
            "flags": 16,
            "start": 26,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "declare class B {\n  static +\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 26, end: 28
✖ Identifier expected - start: 28, end: 30

```

