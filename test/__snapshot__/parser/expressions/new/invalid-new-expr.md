# Kataw parser test case

## Input

`````js

new foo bar;

new ) foo;

new ++foo;

new foo ++;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 1,
                    "start": 0,
                    "end": 4
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 4,
                    "end": 8
                },
                "argumentList": null,
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 768,
                "start": 8,
                "end": 12
            },
            "flags": 128,
            "start": 8,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 1,
                    "start": 13,
                    "end": 18
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 18,
                    "end": 18
                },
                "argumentList": null,
                "flags": 256,
                "start": 13,
                "end": 18
            },
            "flags": 128,
            "start": 13,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 20,
                "end": 24
            },
            "flags": 128,
            "start": 20,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 1,
                    "start": 25,
                    "end": 30
                },
                "expression": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 512,
                        "start": 30,
                        "end": 33
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 33,
                        "end": 36
                    },
                    "flags": 256,
                    "start": 30,
                    "end": 36
                },
                "argumentList": null,
                "flags": 256,
                "start": 25,
                "end": 36
            },
            "flags": 128,
            "start": 25,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 512,
                    "start": 46,
                    "end": 49
                },
                "expression": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 1,
                        "start": 37,
                        "end": 42
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 42,
                        "end": 46
                    },
                    "argumentList": null,
                    "flags": 256,
                    "start": 37,
                    "end": 46
                },
                "flags": 256,
                "start": 37,
                "end": 49
            },
            "flags": 128,
            "start": 37,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "\nnew foo bar;\n\nnew ) foo;\n\nnew ++foo;\n\nnew foo ++;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 18, end: 20
✖ Statement expected - start: 18, end: 20
✖ Expression expected - start: 36, end: 37
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 46, end: 49

```

