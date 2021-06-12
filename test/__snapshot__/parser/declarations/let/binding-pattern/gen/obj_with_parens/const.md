# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/let/binding-pattern/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\binding-pattern\gen\obj_with_parens
> :: test: obj with parens
> :: case: const
## Input

`````js
const {(x)} = v
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 5,
                        "end": 7
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 7
            },
            "flags": 33554448,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 8,
                    "end": 9
                },
                "flags": 32,
                "start": 7,
                "end": 10
            },
            "flags": 16,
            "start": 7,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "v",
                "rawText": "v",
                "flags": 96,
                "start": 13,
                "end": 15
            },
            "flags": 16,
            "start": 13,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "const {(x)} = v",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 7, end: 8
✖ Missing initializer in const declaration - start: 7, end: 8
✖ ',' expected - start: 7, end: 8
✖ Declaration or statement expected - start: 10, end: 11
✖ Declaration or statement expected - start: 11, end: 13

```

