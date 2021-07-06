# Kataw parser test case

## Input

`````js
null?.
  `hello`
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 6
                },
                "member": {
                    "kind": 138477575,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 4
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 226,
                        "member": null,
                        "template": {
                            "kind": 458761,
                            "text": "hello",
                            "rawText": "hello",
                            "flags": 134217824,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 16
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 16
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 16
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "null?.\n  `hello`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Tagged template expressions are not permitted in an optional chain. - start: 6, end: 16

```

