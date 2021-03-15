# Kataw parser test case

## Input

`````js
a
`foo@{xd}@
bar`
b
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "a\n`foo\r\nbar`\nb",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66260,
                "member": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "typeArguments": null,
                "template": {
                    "kind": 4260568,
                    "rawText": "foo\r\nbar",
                    "text": "foo\rbar",
                    "literal": false,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 12
                },
                "optional": false,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 1,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "b",
                "rawText": "b",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 12,
            "end": 14
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

