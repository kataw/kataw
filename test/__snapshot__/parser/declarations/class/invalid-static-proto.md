# Kataw parser test case

## Input

`````js
declare class C {
  static proto p: T;
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
                            "protoKeyword": {
                                "kind": 8388716,
                                "flags": 65,
                                "start": 17,
                                "end": 26
                            },
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "proto",
                                "rawText": "proto",
                                "flags": 96,
                                "start": 26,
                                "end": 32
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "p",
                                    "rawText": "p",
                                    "flags": 96,
                                    "start": 32,
                                    "end": 34
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 32,
                                "end": 34
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 34
                        },
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
                                "start": 34,
                                "end": 34
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 35,
                                    "end": 37
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 35,
                                "end": 37
                            },
                            "flags": 0,
                            "start": 34,
                            "end": 38
                        }
                    ],
                    "flags": 0,
                    "start": 15,
                    "end": 40
                },
                "flags": 4128,
                "start": 15,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "declare class C {\n  static proto p: T;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 34, end: 35

```

