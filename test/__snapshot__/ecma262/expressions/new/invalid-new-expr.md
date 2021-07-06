# Kataw parser test case

## Input

`````js

new foo bar;

new ) foo;

new ++foo;

new foo ++;
`````

## Output

### CST

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
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 4
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 8
                },
                "argumentList": null,
                "flags": 97,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 8,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 18
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 18
                },
                "argumentList": null,
                "flags": 97,
                "transformFlags": 0,
                "start": 13,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 20,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 20,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 30
                },
                "expression": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 33
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 36
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 36
                },
                "argumentList": null,
                "flags": 97,
                "transformFlags": 0,
                "start": 25,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 25,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 49
                },
                "operand": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 42
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 46
                    },
                    "argumentList": null,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 46
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 37,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 37,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "\nnew foo bar;\n\nnew ) foo;\n\nnew ++foo;\n\nnew foo ++;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 8, end: 12
✖ Identifier expected - start: 18, end: 20
✖ Expression expected - start: 36, end: 37
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 46, end: 49

```

