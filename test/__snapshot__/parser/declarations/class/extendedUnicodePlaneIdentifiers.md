# Kataw parser test case

## Input

`````js
class K {
    #𝑚 = 4;
    #𝑀 = 5;
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
                "text": "K",
                "rawText": "K",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#",
                                "rawText": "K",
                                "flags": 96,
                                "start": 9,
                                "end": 15
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 9,
                            "end": 15
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "𝑚",
                                "rawText": "𝑚",
                                "flags": 96,
                                "start": 15,
                                "end": 17
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 4,
                                "rawText": "4",
                                "flags": 96,
                                "start": 19,
                                "end": 21
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 21
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 21,
                            "end": 22
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#",
                                "rawText": "4",
                                "flags": 96,
                                "start": 22,
                                "end": 28
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 22,
                            "end": 28
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "𝑀",
                                "rawText": "𝑀",
                                "flags": 96,
                                "start": 28,
                                "end": 30
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 5,
                                "rawText": "5",
                                "flags": 96,
                                "start": 32,
                                "end": 34
                            },
                            "flags": 32,
                            "start": 28,
                            "end": 34
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 34,
                            "end": 35
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 35
                },
                "flags": 7,
                "start": 32,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "class K {\n    #𝑚 = 4;\n    #𝑀 = 5;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid character - start: 14, end: 15
✖ Invalid character - start: 27, end: 28

```

