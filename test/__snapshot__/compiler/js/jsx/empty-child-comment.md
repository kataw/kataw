# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<adele>{/* Hello from this side */}</adele>
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<adele>{/* Hello from this side */}</adele>",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66175,
                "openingElement": {
                    "kind": 4228,
                    "tagName": {
                        "kind": 129,
                        "text": "adele",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 1,
                        "end": 6
                    },
                    "attributes": {
                        "kind": 123,
                        "attributesList": [],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 6,
                        "end": 6
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 7
                },
                "children": {
                    "kind": 124,
                    "children": [
                        {
                            "kind": 130,
                            "ellipsis": false,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 7,
                            "end": 35
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 7,
                    "end": 35
                },
                "closingElement": {
                    "kind": 4221,
                    "tagName": {
                        "kind": 129,
                        "text": "adele",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 37,
                        "end": 42
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 35,
                    "end": 43
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 8192,
                "start": 0,
                "end": 43
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 43
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
    "end": 43
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

