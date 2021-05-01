# Kataw parser test case

## Input

`````js
async("foo".bar) => x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "original": "async",
                "text": "async",
                "rawText": "async",
                "flags": 96,
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
                            "original": "\"foo\"",
                            "rawText": "\"foo\"",
                            "flags": 96,
                            "start": 6,
                            "end": 11
                        },
                        "expression": {
                            "kind": 134299649,
                            "original": "bar",
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 6,
                        "end": 15
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 32,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "x",
                "text": "x",
                "rawText": " x",
                "flags": 96,
                "start": 19,
                "end": 21
            },
            "flags": 16,
            "start": 19,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "async(\"foo\".bar) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 16, end: 19

```

