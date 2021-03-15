# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js

o.attr = function() {};
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "\no.attr = function() {};",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 66232,
                        "member": {
                            "kind": 196712,
                            "text": "o",
                            "rawText": "o",
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 2
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "attr",
                            "rawText": "attr",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 7,
                        "period": {
                            "kind": 254,
                            "pos": 2,
                            "end": 3
                        }
                    },
                    "operator": "=",
                    "right": {
                        "kind": 8456285,
                        "name": null,
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [],
                                "multiline": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 22
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 23
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 23
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 23
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 24
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

