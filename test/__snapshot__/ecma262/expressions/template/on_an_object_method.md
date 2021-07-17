# Kataw parser test case

## Input

`````js
a.foo`bar`
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
                "kind": 226,
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 5
                    },
                    "flags": 96,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 5
                },
                "template": {
                    "kind": 458761,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 10
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "a.foo`bar`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
a.foo`bar`;
```

### Diagnostics

```javascript
✔ No errors
```

