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
                                "end": 20
                            },
                            "value": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 21,
                                "end": 28
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 17,
                            "end": 28
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 28,
                                "end": 28
                            },
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 28,
                                    "end": 28
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 28,
                                "end": 28
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 28,
                            "end": 29
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 37,
                                "end": 39
                            },
                            "value": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 40,
                                "end": 47
                            },
                            "optionalToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 96,
                                "start": 29,
                                "end": 37
                            },
                            "flags": 0,
                            "start": 29,
                            "end": 47
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 47,
                                "end": 47
                            },
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 47,
                                    "end": 47
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 47,
                                "end": 47
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 47,
                            "end": 48
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 48,
                                "end": 51
                            },
                            "value": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 52,
                                "end": 59
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 48,
                            "end": 59
                        },
                        {
                            "kind": 193,
                            "key": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 59,
                                "end": 59
                            },
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 59,
                                    "end": 59
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 59,
                                "end": 59
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 59,
                            "end": 60
                        }
                    ],
                    "flags": 0,
                    "start": 15,
                    "end": 62
                },
                "flags": 4128,
                "start": 15,
                "end": 62
            },
            "flags": 16,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "declare class X {\n\ta: number;\n\tstatic b: number;\n\tc: number;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 28, end: 29
✖ Identifier expected - start: 47, end: 48
✖ Identifier expected - start: 59, end: 60

```

