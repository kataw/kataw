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
                            "key": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 17,
                                "end": 21
                            },
                            "value": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 22,
                                "end": 29
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 17,
                            "end": 29
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 29,
                                "end": 29
                            },
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 29,
                                    "end": 29
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 29,
                                "end": 29
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 29,
                            "end": 30
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 39,
                                "end": 41
                            },
                            "value": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 42,
                                "end": 49
                            },
                            "optionalToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 65,
                                "start": 30,
                                "end": 39
                            },
                            "flags": 0,
                            "start": 30,
                            "end": 49
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 49,
                                "end": 49
                            },
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 49,
                                    "end": 49
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 49,
                                "end": 49
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 49,
                            "end": 50
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 50,
                                "end": 54
                            },
                            "value": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 55,
                                "end": 62
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 50,
                            "end": 62
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 62,
                                "end": 62
                            },
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 62,
                                    "end": 62
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 62,
                                "end": 62
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 62,
                            "end": 63
                        }
                    ],
                    "flags": 0,
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

```

### Diagnostics

```javascript
✖ Identifier expected - start: 29, end: 30
✖ Identifier expected - start: 49, end: 50
✖ Identifier expected - start: 62, end: 63

```

