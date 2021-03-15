# Kataw parser test case

## Input

`````js
type Foo = string & number
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "type Foo = string & number",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 8
            },
            "type": {
                "kind": 8312,
                "types": [
                    {
                        "kind": 4202702,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 10,
                        "end": 17
                    },
                    {
                        "kind": 4202657,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 19,
                        "end": 26
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 17,
                "end": 26
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 26
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
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

