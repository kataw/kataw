# Kataw parser test case

## Input

`````js
class C { #@{x29e3d}@ }
`````

## Options

### Parser Options

`````js
{}
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
                "text": "C",
                "rawText": "C",
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
                                "kind": 67174651,
                                "text": "#",
                                "flags": 96,
                                "start": 9,
                                "end": 11
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 9,
                            "end": 11
                        },
                        {
                            "kind": 280,
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 64,
                                            "start": 11,
                                            "end": 12
                                        },
                                        "expression": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "x29e3d",
                                                        "rawText": "x29e3d",
                                                        "flags": 96,
                                                        "start": 13,
                                                        "end": 19
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 13,
                                                "end": 19
                                            },
                                            "flags": 48,
                                            "start": 12,
                                            "end": 20
                                        },
                                        "flags": 0,
                                        "start": 11,
                                        "end": 20
                                    },
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 64,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 21,
                                            "end": 21
                                        },
                                        "flags": 0,
                                        "start": 20,
                                        "end": 21
                                    }
                                ],
                                "flags": 32,
                                "start": 11,
                                "end": 21
                            },
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 21,
                                "end": 21
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 11,
                            "end": 21
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 21
                },
                "flags": 7,
                "start": 32,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "class C { #@{x29e3d}@ }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid character - start: 10, end: 11
✖ Identifier expected. A decorator name can only be an identifier - start: 11, end: 13
✖ Identifier expected. A decorator name can only be an identifier - start: 20, end: 23
✖ Identifier expected - start: 21, end: 23

```

