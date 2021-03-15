# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import "y"
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "import \"y\"",
    "filename": "",
    "statements": [
        {
            "kind": 110,
            "fromClause": null,
            "moduleSpecifier": {
                "kind": 4261583,
                "text": "y",
                "rawText": "y",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 10
            },
            "importClause": null,
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 10
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
    "end": 10
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

