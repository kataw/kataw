# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<svg:path/>
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<svg:path/>",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 69766,
                "tagName": {
                    "kind": 129,
                    "text": "svg:path",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 1,
                    "end": 9
                },
                "attributes": {
                    "kind": 123,
                    "attributesList": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 9,
                    "end": 9
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 8192,
                "start": 0,
                "end": 11
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 11
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
    "end": 11
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

