# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/let/binding-pattern/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/binding-pattern/gen/key_that_is_a_member_expression
> :: test: key that is a member expression
> :: case: var
## Options

`````js
{}
`````
## Input

`````js
var {a.b: c} = v
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
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
                                        "start": 5,
                                        "end": 6
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 6
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 6
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 6
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 7,
                "end": 8
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 9,
                    "end": 11
                },
                "flags": 16,
                "start": 9,
                "end": 11
            },
            "flags": 16,
            "start": 7,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "v",
                "rawText": "v",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "flags": 16,
            "start": 14,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "var {a.b: c} = v",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 6, end: 7
✖ The parser expected to find a '}' to match the '{' token here - start: 6, end: 7
✖ ',' expected - start: 6, end: 7
✖ Declaration or statement expected - start: 11, end: 12
✖ Declaration or statement expected - start: 12, end: 14

```

