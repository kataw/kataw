# Kataw parser test case

## Input

`````js
""
;
"some content"
;
"var"
;
"x / y"
;
"raw lower unicode @{x200}"
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "\"\"\n;\n\"some content\"\n;\n\"var\"\n;\n\"x / y\"\n;\n\"raw lower unicode @{x200}\"",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "",
                "rawText": "",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 4
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "some content",
                "rawText": "some content",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 19
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 4,
            "end": 21
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "var",
                "rawText": "var",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 21,
            "end": 29
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "x / y",
                "rawText": "x / y",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 37
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 29,
            "end": 39
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "raw lower unicode @{x200}",
                "rawText": "raw lower unicode @{x200}",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 39,
                "end": 67
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 39,
            "end": 67
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
    "end": 67
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

