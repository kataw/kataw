# Kataw parser test case

## Input

`````js
@({
  store: @inner class Foo {}
})
class Bar {

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
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "start": 0,
                            "end": 1
                        },
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "start": 1,
                                "end": 1
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "store",
                                                        "rawText": "store",
                                                        "flags": 96,
                                                        "start": 3,
                                                        "end": 11
                                                    },
                                                    "right": {
                                                        "kind": 189,
                                                        "decorators": {
                                                            "kind": 207,
                                                            "elements": [
                                                                {
                                                                    "kind": 34611453,
                                                                    "decoratorToken": {
                                                                        "kind": 34611453,
                                                                        "flags": 64,
                                                                        "start": 12,
                                                                        "end": 14
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "inner",
                                                                        "rawText": "inner",
                                                                        "flags": 96,
                                                                        "start": 14,
                                                                        "end": 19
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 14,
                                                                    "end": 19
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 12,
                                                            "end": 19
                                                        },
                                                        "classKeyword": {
                                                            "kind": 37822544,
                                                            "flags": 64,
                                                            "start": 19,
                                                            "end": 25
                                                        },
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "Foo",
                                                            "rawText": "Foo",
                                                            "flags": 96,
                                                            "start": 25,
                                                            "end": 29
                                                        },
                                                        "typeParameters": null,
                                                        "tail": {
                                                            "kind": 277,
                                                            "classHeritage": null,
                                                            "body": {
                                                                "kind": 303,
                                                                "elements": [],
                                                                "flags": 32,
                                                                "start": 31,
                                                                "end": 31
                                                            },
                                                            "flags": 29,
                                                            "start": 32,
                                                            "end": 32
                                                        },
                                                        "flags": 32,
                                                        "start": 12,
                                                        "end": 32
                                                    },
                                                    "flags": 33,
                                                    "start": 3,
                                                    "end": 32
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 17,
                                            "start": 3,
                                            "end": 32
                                        },
                                        "flags": 49,
                                        "start": 2,
                                        "end": 34
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 34
                            },
                            "flags": 268435488,
                            "start": 1,
                            "end": 35
                        },
                        "flags": 0,
                        "start": 1,
                        "end": 35
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 35
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 0,
                "end": 41
            },
            "name": {
                "kind": 134299649,
                "text": "Bar",
                "rawText": "Bar",
                "flags": 96,
                "start": 41,
                "end": 45
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 47,
                    "end": 47
                },
                "flags": 45,
                "start": 32,
                "end": 50
            },
            "flags": 17,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "@({\n  store: @inner class Foo {}\n})\nclass Bar {\n\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. A decorator name can only be an identifier - start: 1, end: 2

```

