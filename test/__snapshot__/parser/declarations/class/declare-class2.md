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
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 17,
                                "end": 20
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 21,
                                "end": 28
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 29
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 65,
                                "start": 29,
                                "end": 37
                            },
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 37,
                                "end": 39
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 40,
                                "end": 47
                            },
                            "flags": 2097152,
                            "start": 29,
                            "end": 48
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 48,
                                "end": 51
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 52,
                                "end": 59
                            },
                            "flags": 2097152,
                            "start": 48,
                            "end": 60
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
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

declare class X TODO!
```

### Diagnostics

```javascript
✔ No errors
```

