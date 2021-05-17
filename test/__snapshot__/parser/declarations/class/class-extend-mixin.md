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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
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
                            "flags": 96,
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
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "mixin",
                    "rawText": "mixin",
                    "flags": 96,
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
                            "flags": 96,
                            "start": 27,
                            "end": 30
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 27,
                    "end": 30
                },
                "flags": 268435488,
                "start": 20,
                "end": 31
            },
            "flags": 16,
            "start": 20,
            "end": 31
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 33,
                "end": 33
            },
            "flags": 16,
            "start": 31,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "class Foo<T> extends mixin(Bar) { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 12, end: 20
✖ Expected a `;` - start: 31, end: 33

```

