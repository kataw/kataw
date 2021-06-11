# Kataw parser test case

## Input

`````js
declare class B {
  proto x: T;
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
                                "kind": 16873,
                                "flags": 65,
                                "start": 17,
                                "end": 25
                            },
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 25,
                                "end": 27
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 30
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 28,
                                "end": 30
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 31
                        }
                    ],
                    "flags": 0,
                    "start": 15,
                    "end": 33
                },
                "flags": 4128,
                "start": 15,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "declare class B {\n  proto x: T;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

declare class B TODO!
```

### Diagnostics

```javascript
✔ No errors
```

