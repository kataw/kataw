# Kataw parser test case

## Input

`````js
declare class C { proto [K]: V }
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
                            "kind": 195,
                            "protoKeyword": {
                                "kind": 16873,
                                "flags": 32,
                                "start": 17,
                                "end": 23
                            },
                            "staticToken": null,
                            "name": null,
                            "key": {
                                "kind": 144,
                                "name": {
                                    "kind": 134299649,
                                    "text": "K",
                                    "rawText": "K",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 17,
                                "end": 26
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "V",
                                        "rawText": "V",
                                        "flags": 96,
                                        "start": 28,
                                        "end": 30
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 2097152,
                                "start": 28,
                                "end": 30
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 30
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 15,
                    "end": 32
                },
                "flags": 4128,
                "start": 15,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "declare class C { proto [K]: V }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

declare class C TODO!
```

### Diagnostics

```javascript
✔ No errors
```

