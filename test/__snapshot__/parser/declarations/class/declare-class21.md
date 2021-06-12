# Kataw parser test case

## Input

`````js
declare class B {
  static set "string" (): {};
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
                            "protoKeyword": {
                                "kind": 8388716,
                                "flags": 65,
                                "start": 17,
                                "end": 26
                            },
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
                            "value": {
                                "kind": 148,
                                "parameters": {
                                    "kind": 208,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 41,
                                    "end": 41
                                },
                                "returnType": {
                                    "kind": 134234353,
                                    "properties": [],
                                    "flags": 0,
                                    "start": 43,
                                    "end": 46
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 39,
                                "end": 46
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 46
                        }
                    ],
                    "flags": 0,
                    "start": 15,
                    "end": 46
                },
                "flags": 4128,
                "start": 15,
                "end": 46
            },
            "flags": 16,
            "start": 0,
            "end": 46
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 46,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "declare class B {\n  static set \"string\" (): {};\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 46, end: 47
✖ Declaration or statement expected - start: 47, end: 49

```

