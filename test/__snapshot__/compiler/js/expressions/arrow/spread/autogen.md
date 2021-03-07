# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> ({a:b,...obj}) => {}
> `````

> `````js
> ({...obj} = {}) => {}
> `````

> `````js
> ({...(a,b),c})
> `````

> `````js
> ({...a,b,c})
> `````

> `````js
> ({...(obj)}) => {}
> `````

> `````js
> ({...(a,b)}) => {}
> `````

> `````js
> ({...{a,b}}) => {}
> `````

> `````js
> ({...[a,b]}) => {}
> `````

### Templates

#### case

`````js
#
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "#",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "#",
                    "rawText": "",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 1
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 1,
            "length": 1
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 1
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

