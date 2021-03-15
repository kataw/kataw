# Kataw parser test case

## Input

`````js
tag`\ \\`;
tag`\\\ `;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "tag`\\ \\\\`;\ntag`\\\\\\ `;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66260,
                "member": {
                    "kind": 196712,
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "typeArguments": null,
                "template": {
                    "kind": 4260568,
                    "rawText": "\\ \\\\",
                    "text": " \\",
                    "literal": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 3,
                    "end": 9
                },
                "optional": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 3,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66260,
                "member": {
                    "kind": 196712,
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 14
                },
                "typeArguments": null,
                "template": {
                    "kind": 4260568,
                    "rawText": "\\\\\\ ",
                    "text": "\\ ",
                    "literal": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 14,
                    "end": 20
                },
                "optional": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 14,
                "end": 20
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 10,
            "end": 21
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
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

