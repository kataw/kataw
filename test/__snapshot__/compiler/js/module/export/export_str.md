# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default "foo";
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export default \"foo\";",
    "filename": "",
    "statements": [
        {
            "kind": 77,
            "declaration": {
                "kind": 4261583,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 20
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": true,
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

