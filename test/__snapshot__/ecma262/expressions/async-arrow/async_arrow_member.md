# Kataw parser test case

## Input

`````js
async("foo".bar) => x
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 201392131,
                                "text": "foo",
                                "rawText": "\"foo\"",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 11
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 15
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 6,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 15
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 19,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 19,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "async(\"foo\".bar) => x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '=>' expected - start: 16, end: 19

```

