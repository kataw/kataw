# Kataw parser test case

## Input

`````js
declare class C { static [[foo]]: T }
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
                            "kind": 248,
                            "protoKeyword": null,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 27,
                                "end": 30
                            },
                            "value": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 33,
                                    "end": 35
                                },
                                "typeParameters": null,
                                "flags": 32,
                                "start": 33,
                                "end": 35
                            },
                            "optionalToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 17,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 35
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 15,
                    "end": 37
                },
                "flags": 4128,
                "start": 15,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "declare class C { static [[foo]]: T }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
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

