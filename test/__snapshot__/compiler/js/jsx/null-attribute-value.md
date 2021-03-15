# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<rect option:square />
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<rect option:square />",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 69766,
                "tagName": {
                    "kind": 129,
                    "text": "rect",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 1,
                    "end": 5
                },
                "attributes": {
                    "kind": 123,
                    "attributesList": [
                        {
                            "kind": 122,
                            "name": {
                                "kind": 129,
                                "text": "option:square",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 5,
                                "end": 19
                            },
                            "initializer": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 5,
                            "end": 19
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 5,
                    "end": 19
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 8192,
                "start": 0,
                "end": 22
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

