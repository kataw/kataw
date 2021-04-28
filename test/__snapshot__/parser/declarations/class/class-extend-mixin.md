# Kataw parser test case

## Input

`````js
class Foo<T> extends mixin(Bar) { }
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 768,
                "start": 5,
                "end": 9
            },
            "typeParameters": {
                "kind": 146,
                "types": [
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 768,
                            "start": 10,
                            "end": 11
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 10,
                        "end": 11
                    }
                ],
                "flags": 0,
                "start": 9,
                "end": 12
            },
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 12,
                    "start": 0,
                    "end": 20
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "mixin",
                        "rawText": "mixin",
                        "flags": 768,
                        "start": 20,
                        "end": 26
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "Bar",
                                "rawText": "Bar",
                                "flags": 768,
                                "start": 27,
                                "end": 30
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 27,
                        "end": 30
                    },
                    "flags": 256,
                    "start": 20,
                    "end": 31
                },
                "typeParameter": null,
                "flags": 128,
                "start": 20,
                "end": 31
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 33,
                "end": 35
            },
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "class Foo<T> extends mixin(Bar) { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

