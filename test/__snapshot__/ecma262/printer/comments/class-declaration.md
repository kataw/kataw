# Kataw parser test case

## Input

`````js
class x {
    ;
    ;/*1*/
    ;
    ;
    a = b
    x: string
}


class /*1*/ x /*2*/ {
    ;
    ;/*3*/
    ;
    ;
    a /*4*/= /*5*/b
    x/*6*/: /*7*/string
}

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
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 9,
                            "end": 15
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 15,
                            "end": 21
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 21,
                            "end": 32
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 32,
                            "end": 38
                        },
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
                                "flags": 96,
                                "start": 38,
                                "end": 44
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 46,
                                "end": 48
                            },
                            "flags": 32,
                            "start": 38,
                            "end": 48
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 48,
                                "end": 54
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 48,
                            "end": 54
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 54
                },
                "flags": 7,
                "start": 32,
                "end": 54
            },
            "flags": 16,
            "start": 0,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 55,
                "end": 62
            },
            "flags": 16,
            "start": 55,
            "end": 62
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 64,
                "end": 72
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 72,
                "end": 80
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 88,
                            "end": 94
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 94,
                            "end": 100
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 100,
                            "end": 111
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 111,
                            "end": 117
                        },
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
                                "flags": 96,
                                "start": 117,
                                "end": 123
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 130,
                                "end": 137
                            },
                            "flags": 32,
                            "start": 117,
                            "end": 137
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 137,
                                "end": 143
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 137,
                            "end": 143
                        }
                    ],
                    "flags": 32,
                    "start": 88,
                    "end": 143
                },
                "flags": 80,
                "start": 32,
                "end": 143
            },
            "flags": 17,
            "start": 64,
            "end": 143
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 149,
                "end": 161
            },
            "flags": 16,
            "start": 149,
            "end": 161
        }
    ],
    "isModule": false,
    "source": "class x {\n    ;\n    ;/*1*/\n    ;\n    ;\n    a = b\n    x: string\n}\n\n\nclass /*1*/ x /*2*/ {\n    ;\n    ;/*3*/\n    ;\n    ;\n    a /*4*/= /*5*/b\n    x/*6*/: /*7*/string\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 164
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 54, end: 55
✖ Declaration or statement expected - start: 62, end: 64
✖ Duplicate identifier - start: 72, end: 80
✖ The parser expected to find a '}' to match the '{' token here - start: 148, end: 149
✖ Declaration or statement expected - start: 161, end: 163

```

