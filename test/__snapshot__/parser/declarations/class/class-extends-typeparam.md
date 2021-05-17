# Kataw parser test case

## Input

`````js
class Foo<T> extends Bar<T> { }
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "Bar",
                        "rawText": "Bar",
                        "flags": 96,
                        "start": 20,
                        "end": 24
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 64,
                        "start": 24,
                        "end": 25
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 25,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 26,
                    "end": 27
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 29,
                        "end": 29
                    },
                    "flags": 48,
                    "start": 27,
                    "end": 31
                },
                "flags": 32,
                "start": 20,
                "end": 31
            },
            "flags": 16,
            "start": 20,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "class Foo<T> extends Bar<T> { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 12, end: 20

```

