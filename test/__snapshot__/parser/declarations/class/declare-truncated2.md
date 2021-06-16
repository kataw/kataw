# Kataw parser test case

## Input

`````js
declare class C {
  -
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
                "text": "C",
                "rawText": "C",
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
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 17,
                                "end": 17
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 17,
                                        "end": 21
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 17,
                                    "end": 21
                                },
                                "flags": 2097152,
                                "start": 17,
                                "end": 21
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 15,
                    "end": 23
                },
                "flags": 4128,
                "start": 15,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "declare class C {\n  -\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 17, end: 21
✖ Expected a valid subtraction operand - start: 21, end: 23

```

