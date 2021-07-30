# Kataw parser test case

## Input

`````js
foo == null;

foo != null;

null == foo;

null != foo;
`````

## Options

### Parser Options

`````js
{ allowTypes: true, lint: { noDoubleEquals: true } }
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 34622,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 3,
                    "end": 6
                },
                "right": {
                    "kind": 138477575,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 11
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 34623,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 17,
                    "end": 20
                },
                "right": {
                    "kind": 138477575,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 25
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 12,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 12,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 138477575,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 34622,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 32,
                    "end": 35
                },
                "right": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 39
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 26,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 26,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 138477575,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 46
                },
                "operatorToken": {
                    "kind": 34623,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 46,
                    "end": 49
                },
                "right": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 53
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 40,
                "end": 53
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 40,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "foo == null;\n\nfoo != null;\n\nnull == foo;\n\nnull != foo;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '==' may be unsafe if you are relying on type coercion - start: 3, end: 6
✖ Use of '!=' may be unsafe if you are relying on type coercion - start: 17, end: 20

```

