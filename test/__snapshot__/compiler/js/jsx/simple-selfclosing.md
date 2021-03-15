# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<img/>
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<img/>",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 69766,
                "tagName": {
                    "kind": 129,
                    "text": "img",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 1,
                    "end": 4
                },
                "attributes": {
                    "kind": 123,
                    "attributesList": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 4,
                    "end": 4
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 8192,
                "start": 0,
                "end": 6
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 6
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
    "end": 6
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

