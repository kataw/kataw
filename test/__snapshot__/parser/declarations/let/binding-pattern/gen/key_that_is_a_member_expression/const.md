# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/declarations/let/binding-pattern/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\binding-pattern\gen\key_that_is_a_member_expression
> :: test: key that is a member expression
> :: case: const
## Input

`````js
const {a.b: c} = v
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
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 8
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 5,
                        "end": 8
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 8
            },
            "flags": 33554448,
            "start": 0,
            "end": 8
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 9,
                "end": 10
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 10,
                "end": 11
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "flags": 16,
                "start": 11,
                "end": 13
            },
            "flags": 16,
            "start": 9,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "v",
                "rawText": "v",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "flags": 16,
            "start": 16,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "const {a.b: c} = v",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 8, end: 9
✖ The parser expected to find a '}' to match the '{' token here - start: 8, end: 9
✖ Missing initializer in const declaration - start: 8, end: 9
✖ ',' expected - start: 8, end: 9
✖ Declaration or statement expected - start: 13, end: 14
✖ Declaration or statement expected - start: 14, end: 16

```

