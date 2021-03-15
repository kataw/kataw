# Kataw parser test case

## Input

`````js
type Foo = [string, string?]
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "type Foo = [string, string?]",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 8
            },
            "type": {
                "kind": 134226144,
                "elementTypes": [
                    {
                        "kind": 4202702,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 12,
                        "end": 18
                    },
                    {
                        "kind": 8365,
                        "valueType": {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 19,
                            "end": 26
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 26,
                        "end": 27
                    }
                ],
                "multiline": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 10,
                "end": 28
            },
            "typeParameters": null,
            "flags": 0,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

