# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: k
> :: test: with unclosed block
> :: case: =! class function try while with foo!
## Input

`````js
{ {} finally(x) { =! class function try while with foo!
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 16,
                            "start": 4,
                            "end": 4
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 0,
                            "start": 4,
                            "end": 12
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 12
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
                                "start": 13,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 15
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 17,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 19
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 64,
                                "start": 19,
                                "end": 20
                            },
                            "operand": {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 26
                                },
                                "name": null,
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
                                                    "text": "function",
                                                    "rawText": "function",
                                                    "flags": 96,
                                                    "start": 26,
                                                    "end": 35
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 26,
                                                "end": 35
                                            },
                                            {
                                                "kind": 280,
                                                "decorators": null,
                                                "declaredToken": null,
                                                "staticToken": null,
                                                "asyncKeyword": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "try",
                                                    "rawText": "try",
                                                    "flags": 96,
                                                    "start": 35,
                                                    "end": 39
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 35,
                                                "end": 39
                                            },
                                            {
                                                "kind": 280,
                                                "decorators": null,
                                                "declaredToken": null,
                                                "staticToken": null,
                                                "asyncKeyword": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "while",
                                                    "rawText": "while",
                                                    "flags": 96,
                                                    "start": 39,
                                                    "end": 45
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 39,
                                                "end": 45
                                            },
                                            {
                                                "kind": 280,
                                                "decorators": null,
                                                "declaredToken": null,
                                                "staticToken": null,
                                                "asyncKeyword": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "with",
                                                    "rawText": "with",
                                                    "flags": 96,
                                                    "start": 45,
                                                    "end": 50
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 45,
                                                "end": 50
                                            },
                                            {
                                                "kind": 280,
                                                "decorators": null,
                                                "declaredToken": null,
                                                "staticToken": null,
                                                "asyncKeyword": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 50,
                                                    "end": 54
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 50,
                                                "end": 54
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 26,
                                        "end": 54
                                    },
                                    "flags": 26,
                                    "start": 32,
                                    "end": 54
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 54
                            },
                            "flags": 32,
                            "start": 19,
                            "end": 54
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 54
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 64,
                                "start": 54,
                                "end": 55
                            },
                            "operand": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 55,
                                "end": 55
                            },
                            "flags": 32,
                            "start": 54,
                            "end": 55
                        },
                        "flags": 16,
                        "start": 54,
                        "end": 55
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 55
            },
            "flags": 16,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 15, end: 17
✖ The parser expected to find a '}' to match the '{' token here - start: 17, end: 19
✖ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 19, end: 20
✖ Missing an opening brace - '{ - start: 26, end: 35
✖ Expression expected - start: 54, end: 55

```

